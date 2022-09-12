/**
 * Konsep redux terdiri dari 3 inti:
 * 1. Store           : bertugas menyimpan state aplikasi.
 * 2. Reducer         : bertugas mengelola perubahan yang terjadi pada state berdasarkan perintah action/dispatch tertentu.
 * 3. Action/Dispatch : bertugas mengirimkan perintah ke reducer untuk melakukan perubahan state.
 *
 * contoh kasus: Dimsum Store
 * 1. Store           : menyimpan informasi terkait stock persediaan dimsum.
 * 2. Reducer         : penjual dimsum yang berada di gerobak, bertugas menerima perintah dari pembeli (action/dispatch).
 * 3. Action/Dispatch : pembeli dimsum yang akan membeli dimsum di gerobak.
 */

const Redux = require('redux');

const initialState = {
  stock: 50
};

function dimsumReducer(state = initialState, { type, ...data }) {
  console.log('Executing', type);
  switch(type) {
    case 'ORDER_DIMSUM':
      return { ...state, stock: state.stock - data.amount };
    default:
      return { ...state };
  }
}

const dimsumStore = Redux.createStore(dimsumReducer);

console.log('=====');
console.log('initial state:', dimsumStore.getState());

const unsubscribe = dimsumStore.subscribe((state) => console.log('state:', dimsumStore.getState()));

dimsumStore.dispatch({ type: 'ORDER_DIMSUM', amount: 5 });
dimsumStore.dispatch({ type: 'ORDER_DIMSUM', amount: 6 });
dimsumStore.dispatch({ type: 'ORDER_DIMSUM', amount: 10 });
dimsumStore.dispatch({ type: 'ORDER_DIMSUM', amount: 15 });

unsubscribe();
