'use strict';

const persistPlugin = store => {
    const history = JSON.parse(
        localStorage.getItem('scoreKeeper') ||
            '{"games":{}}'
    );

    if (history) {
        store.commit('restoreState', history);
    }

    store.subscribe(() => {
        localStorage.setItem(
            'scoreKeeper',
            JSON.stringify(store.state, null, 4)
        );
    });
};

export default persistPlugin;
