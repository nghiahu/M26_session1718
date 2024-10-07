<template>
    <div>
  <h1>Admin Page</h1>
  <nav style="display: flex;gap: 10px;">
    <router-link exact-active-class="active" to="/admin">Dashoard</router-link>
    <router-link active-class="active" to="/admin/manager-user">User</router-link>    
    <router-link active-class="active" to="/admin/manager-product">Product</router-link>    
    <router-link active-class="active" to="/admin/settings">setting</router-link>    
  </nav>
  <router-view></router-view>
</div>
</template>

<script>
export default {

}
</script>

<style scope>
.active{
    padding: 5px;
    background-color:red;
    color: white;
    border-radius: 5%;
}
</style>