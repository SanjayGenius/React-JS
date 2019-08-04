import * as types from './types';

export function incrementClick(count) {
	return {
		type: types.INCREASE_COUNT,
		count
	};
}

export function decrementClick(count) {
	return {
		type: types.DECREASE_COUNT,
		count
	};
}