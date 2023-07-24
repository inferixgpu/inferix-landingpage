import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export default function timeAgo(time: string) {
	dayjs.extend(relativeTime);
	return dayjs(time).fromNow();
}
