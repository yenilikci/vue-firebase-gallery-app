import { ref } from 'vue'
import { database } from '@/firebase/config';

const useCollection = (k) => {
    const documents = ref(null);
    const error = ref(null);

    let collectionRef = database.collection(k).orderBy('creationDate', 'desc');

    collectionRef.onSnapshot(snap => {
        let results = [];

        snap.docs.forEach(doc => {
            results.push({ ...doc.data(), doc: doc.id });
        })

        documents.value = results;
        error.value = null;

    }, err => {
        documents.value = null;
        error.value = err.message;
    })

    return { documents, error };
}

export default useCollection;