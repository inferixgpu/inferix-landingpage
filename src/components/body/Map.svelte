<script>
	import { onDestroy, setContext } from 'svelte';
	import { mapboxgl, key } from '../utils/mapboxgl.js';

	setContext(key, {
		getMap: () => map
	});

	let map;
	let workersData = [];
	let featuresData = {};

	async function fetchWorkersData() {
		try {
			const response = await fetch('http://api.inferix.io:8080/api/v3/worker-mgt/workers');
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
	}

	function initMap(container) {
		fetchWorkersData();

		map = new mapboxgl.Map({
			container: container,
			style: 'mapbox://styles/mapbox/dark-v11',
			center: [108.2460, 14.0583],
			zoom: 3,
			minZoom: 4,
			maxZoom: 12
		});

		map.on('load', () => {
			map.addSource('workers', {
				type: 'geojson',
				data: featuresData,
				cluster: true,
				clusterMaxZoom: 14,
				clusterRadius: 50
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
					'circle-radius': ['step', ['get', 'point_count'], 30, 100, 40, 750, 50],
					'circle-opacity': 0.6
				}
			});

			function animateOpacity() {
				let start = null;
				const duration = 2000; 
				const maxOpacity = 0.6;
				const minOpacity = 0.3;

				function step(timestamp) {
					if (!start) start = timestamp;
					const progress = timestamp - start;
					const opacity =
						minOpacity +
						(maxOpacity - minOpacity) * (Math.sin((progress / duration) * Math.PI * 2) * 0.5 + 0.5);

					map.setPaintProperty('cluster-gradient-outer', 'circle-opacity', opacity);

					if (progress < duration) {
						requestAnimationFrame(step);
					} else {
						start = null;
						requestAnimationFrame(step);
					}
				}

				requestAnimationFrame(step);
			}

			animateOpacity();

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
				id: 'unclustered-point',
				type: 'circle',
				source: 'workers',
				filter: ['!', ['has', 'point_count']],
				paint: {
					'circle-color': '#11b4da',
					'circle-radius': 4,
					'circle-stroke-width': 1,
					'circle-stroke-color': '#fff'
				}
			});

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
		});
	}
</script>

<div class="map-all">
	<div use:initMap></div>
</div>

<style>
	.map-all {
		width: 100vw;
		display: flex;
		justify-content: center;
		margin-top: 50px;
	}
	div {
		width: 90%;
		height: 931px;
	}
	.mapboxgl-ctrl-attrib-inner{
		display:none
	}
</style>
