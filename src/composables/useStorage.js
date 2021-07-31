import { ref, watchEffect } from 'vue'
import { repo } from '../firebase/config'

const useStorage = (file) => {
    const error = ref(null);
    const url = ref(null); //download url

    watchEffect(() => {
        const storageRef = repo.ref('resimler/' + file.name);
        storageRef.put(file).on('state_changed', (snap) => {
            console.log(snap);
        }, (err) => {
            error.value = err;
        }, async () => {
            const dlURL = await storageRef.getDownloadURL;
            url = dlURL;
        })
    })

    return { url, error }
}

export default useStorage;