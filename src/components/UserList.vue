<template>
    <div>
      <table>
        <thead>
          <th>name</th>
          <th>email</th>
        </thead>
        <tbody v-for="user in users">
           <td>{{user.username}}</td>
           <td>{{user.email}}</td>
        </tbody>
      </table>
    </div>
</template>

<script>
    export default {
        name: "user-list",
        data(){
          return {
            users:[]
          }
        },
        created:function(){
          var they = this;
          this.$ajax.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
              they.users = response.data;
            })
            .catch(function (error) {
              console.log(error);
            });
      }
    }
</script>

<style scoped>

</style>
