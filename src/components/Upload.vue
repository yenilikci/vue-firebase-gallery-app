<template>
  <form>
    <label>
      <input type="file" @change="uploadFile" />
      <span> <i class="fas fa-cloud-upload-alt"></i>Upload a picture</span>
    </label>
    <div class="output">
      <div v-if="fileError" class="error">
        {{ fileError }}
      </div>
      <div v-if="file">
        {{ file.name }}
      </div>
      <ProgressBar v-if="file" :file="file" @ok="file = null" />
      <!--
      {{ /* ok = context emit */}}
      -->
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import ProgressBar from "./ProgressBar.vue";

export default {
  components: {
    ProgressBar,
  },
  setup() {
    const file = ref("");
    const fileError = ref("");

    const types = ["image/png", "image/jpeg"];

    const uploadFile = (e) => {
      //console.log(e);
      let chosen = e.target.files[0];
      //console.log(chosen);

      if (chosen && types.includes(chosen.type)) {
        file.value = chosen;
        fileError.value = null;
      } else {
        file.value = null;
        fileError.value = "Please select image file (png or jpeg)";
      }
    };
    return { uploadFile, file, fileError };
  },
};
</script>

<style>
form {
  margin: 30px auto 10px;
  text-align: center;
}
label input {
  height: 0;
  width: 0;
  opacity: 0;
}
label span i {
  margin: 0 5px;
}
label {
  display: block;
  width: 160px;
  height: 30px;
  background-color: var(--primary);
  border: 2px solid var(--success);
  border-radius: 6px;
  margin: 10px auto;
  line-height: 30px;
  color: var(--success);
  font-weight: bold;
  cursor: pointer;
}
label:hover {
  background: #2f3542;
  color: white;
  border: 2px solid var(--primary);
}
.output {
  height: 40px;
  font-size: 0.8rem;
}
.error {
  color: var(--error);
}
</style>