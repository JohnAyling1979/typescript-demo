import create from 'zustand'

interface BearState {
	bears: number;
	increase: () => void;
	clear: () => void;
}

const useBearStore = create<BearState>(set => ({
  bears: 0,
  increase: () => set(state => ({ bears: state.bears + 1 })),
	clear:() => set(state => ({ bears: 0 })),
}));

export default useBearStore;