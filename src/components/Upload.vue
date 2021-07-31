<template>
  <form>
    <label>
      <input type="file" />
      <span> <i class="fas fa-cloud-upload-alt"></i>Resim Yükle </span>
    </label>
  </form>
</template>

<script>
export default {};
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
  width: 150px;
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
</style>