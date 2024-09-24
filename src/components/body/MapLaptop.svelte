<script>
	import { onDestroy, setContext } from 'svelte';
	import { mapboxgl, key } from '../utils/mapboxgl.js';
	import CONFIG_ENV from '../config/api.ts';

	setContext(key, {
		getMap: () => map
	});

	let map;
	let workersData = [];
	let featuresData = {};

	async function fetchWorkersData() {
		try {
			const response = await fetch(`${CONFIG_ENV.url}${CONFIG_ENV.api_workers}`);
			const data = await response.json();
			workersData = data;
			transformToGeoJson(workersData);
		} catch (error) {
			console.error('error call api:', error);
		}
	}

	function transformToGeoJson(data) {
		const features = data.workers.map((worker) => ({
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [worker.longitude, worker.latitude]
			},
			properties: {
				id: worker.id,
				name: worker.name
			}
		}));

		featuresData = new Proxy(
			{
				type: 'FeatureCollection',
				features: features
			},
			{
				set(target, key, value) {
					console.log(`Change attribute ${key}: ${value}`);
					target[key] = value;
					return true;
				}
			}
		);
		localStorage.setItem('myFeaturesData', JSON.stringify(featuresData));
	}

	function initMap(container) {
		if (map) {
			return;
		}
		fetchWorkersData();

		map = new mapboxgl.Map({
			container: container,
			style: 'mapbox://styles/mapbox/dark-v10',
			center: [0, 14.0583],
			maxZoom: 10,
            zoom:1
		});

		map.on('load', () => {
			setTimeout(() => {
			const storedData = localStorage.getItem('myFeaturesData');
			if (storedData) {
				featuresData = JSON.parse(storedData);
			} else {
				fetchWorkersData();
			}
			map.addSource('workers', {
				type: 'geojson',
				//data: 'https://gist.githubusercontent.com/thedivtagguy/0a07453f2081be9c0f5b6fc2a2681a0f/raw/3c41dbbba93f88a78af1cf13e88443d2eed7d6ec/geodata.geojson',
				data: featuresData,
				cluster: true,
				clusterMaxZoom: 14,
				clusterRadius: 50
				// renderWorldCopies: false,
			});

			map.addLayer({
				id: 'cluster-gradient-inner',
				type: 'circle',
				source: 'workers',
				filter: ['has', 'point_count'],
				paint: {
					'circle-color': '#00C085',
					'circle-radius': ['step', ['get', 'point_count'], 15, 100, 25, 750, 35],
					'circle-opacity': 1
				}
			});

			map.addLayer({
				id: 'cluster-gradient-outer',
				type: 'circle',
				source: 'workers',
				filter: ['has', 'point_count'],
				paint: {
					'circle-color': '#00D6D9',
					'circle-radius': ['step', ['get', 'point_count'], 15, 100, 25, 750, 35],
					'circle-opacity': 0.6
				}
			});

			map.on('error', (e) => {
				console.error('Error from Mapbox:', e.error.message);
			});

			function pulsingEffect() {
				const duration = 2000;
				const delay = 900;
				const maxRadius = 50;
				const minRadius = 30;
				const maxOpacity = 0.6;
				const minOpacity = 0;

				let start = null;

				function animate(timestamp) {
					if (!start) start = timestamp;
					const progress = timestamp - start;

					let easing = Math.min(progress / duration, 1);

					const radius = minRadius + (maxRadius - minRadius) * easing;
					const opacity = minOpacity + (maxOpacity - minOpacity) * (1 - Math.abs(1 - easing * 2));

					map.setPaintProperty('cluster-gradient-outer', 'circle-radius', radius);
					map.setPaintProperty('cluster-gradient-outer', 'circle-opacity', opacity);

					if (progress < duration) {
						requestAnimationFrame(animate);
					} else {
						setTimeout(() => {
							start = null;
							requestAnimationFrame(animate);
						}, delay);
					}
				}

				requestAnimationFrame(animate);
			}

			pulsingEffect();

			map.addLayer({
				id: 'cluster-count',
				type: 'symbol',
				source: 'workers',
				filter: ['has', 'point_count'],
				layout: {
					'text-field': '{point_count_abbreviated}',
					'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
					'text-size': 12
				}
			});

			map.addLayer({
				id: 'unclustered-gradient-inner',
				type: 'circle',
				source: 'workers',
				filter: ['!', ['has', 'point_count']],
				paint: {
					'circle-color': '#00C085',
					'circle-radius': ['step', ['get', 'point_count'], 15, 100, 25, 750, 35],
					'circle-opacity': 1
				}
			});

			map.addLayer({
				id: 'unclustered-gradient-outer',
				type: 'circle',
				source: 'workers',
				filter: ['!', ['has', 'point_count']],
				paint: {
					'circle-color': '#00D6D9',
					'circle-radius': ['step', ['get', 'point_count'], 15, 100, 25, 750, 35],
					'circle-opacity': 0.6
				}
			});

			function pulsingEffectPoint() {
				const duration = 2000;
				const delay = 900;
				const maxRadius = 20;
				const minRadius = 10;
				const maxOpacity = 0.6;
				const minOpacity = 0;

				let start = null;

				function animate(timestamp) {
					if (!start) start = timestamp;
					const progress = timestamp - start;

					let easing = Math.min(progress / duration, 1);

					const radius = minRadius + (maxRadius - minRadius) * easing;
					const opacity = minOpacity + (maxOpacity - minOpacity) * (1 - Math.abs(1 - easing * 2));

					map.setPaintProperty('unclustered-gradient-outer', 'circle-radius', radius);
					map.setPaintProperty('unclustered-gradient-outer', 'circle-opacity', opacity);

					if (progress < duration) {
						requestAnimationFrame(animate);
					} else {
						setTimeout(() => {
							start = null;
							requestAnimationFrame(animate);
						}, delay);
					}
				}

				requestAnimationFrame(animate);
			}

			pulsingEffectPoint();

			map.on('click', 'cluster-gradient-inner', (e) => {
				const features = map.queryRenderedFeatures(e.point, {
					layers: ['cluster-gradient-inner']
				});
				const clusterId = features[0].properties.cluster_id;
				map.getSource('workers').getClusterExpansionZoom(clusterId, (err, zoom) => {
					if (err) return;

					map.easeTo({
						center: features[0].geometry.coordinates,
						zoom: zoom
					});
				});
			});

			map.on('mouseenter', 'cluster-gradient-inner', () => {
				map.getCanvas().style.cursor = 'pointer';
			});
			map.on('mouseleave', 'cluster-gradient-inner', () => {
				map.getCanvas().style.cursor = '';
			});
		}, 2000); 
	});
	}
</script>

<!-- <div class="all">
	<div use:initMap></div>
</div> -->
<div use:initMap></div>

<style>
	.all {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 1000px;
		height: 931px;
		overflow: hidden;
	}
	div {
		/* position: absolute; */
		/* position: absolute;
		top:0;
		bottom:0; */
		width: 80%;
		height: 700px;
		margin: 0 auto;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
        position: relative;
        z-index: 99;
		margin-top: -200px;
		/* background-color: red; */
	}

</style>
