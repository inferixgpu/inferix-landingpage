import type { UserType } from '$services/api/types/user';

export function getUserName(user: UserType | undefined) {
	return user?.name || user?.username || 'Anonymous';
}
