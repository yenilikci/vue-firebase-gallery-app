import { ref, watchEffect } from 'vue'
import { repo } from '../firebase/config'

const useStorage = (file) => {
    const error = ref(null);
    const url = ref(null); //download url
    const progress = ref(null);

    watchEffect(() => {
        const storageRef = repo.ref('resimler/' + file.name);
        storageRef.put(file).on('state_changed', (snap) => {
            //console.log(snap);
            const percentile = (snap.bytesTransferred / snap.totalBytes) * 100;
            progress.value = percentile;
            console.log(progress.value)
        }, (err) => {
            error.value = err;
        }, async () => {
            const dlURL = await storageRef.getDownloadURL;
            url.value = dlURL;
        })
    })

    return { url, error, progress }
}

export default useStorage;