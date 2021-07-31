import { ref, watchEffect } from 'vue'
import { repo, database, date } from '../firebase/config'

const useStorage = (file) => {
    const error = ref(null);
    const url = ref(null); //download url
    const progress = ref(null);

    watchEffect(() => {

        const storageRef = repo.ref('images/' + file.name);

        const collectionRef = database.collection('images')

        storageRef.put(file).on('state_changed', (snap) => {
            //console.log(snap);
            const percentile = (snap.bytesTransferred / snap.totalBytes) * 100;
            progress.value = percentile;
        }, (err) => {
            error.value = err;
        }, async () => {
            const dlURL = await storageRef.getDownloadURL();

            const creationDate = date();
            await collectionRef.add({
                url: dlURL,
                creationDate
            });

            url.value = dlURL;
        })
    })

    return { url, error, progress }
}

export default useStorage;