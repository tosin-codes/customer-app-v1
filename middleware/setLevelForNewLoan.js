
export default function ({ store, redirect, $axios, $auth }) {
    let token = $auth.strategy.token.get();
    return $axios.get('loans/active', {
        headers: {
        'Authorization': token
        }
    }).then(response => {
        if(response.data.data != null){
            let loan = response.data.data
            store.commit('setActiveLoanLevel', loan)
            return redirect('/kyc')
            // return true;
        }
    })
    .catch((error) => {
        console.log(error)
    })
}