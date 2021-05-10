
export default function ({ store, redirect, $axios, $auth }) {
    let token = $auth.strategy.token.get();
    console.log(token)
    return $axios.get('loans/active', {
        headers: {
        'Authorization': token
        }
    }).then(response => {
        console.log(response)
        if(response.data.data != null){
            let loan = response.data.data
            store.commit('setActiveLoanLevel', loan)
            return redirect('/kyc')
        }
    })
    .catch((error) => {
        console.log(error)
    })
}