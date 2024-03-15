
<template>
  

 <main>
  <!-- Date -->

 <div class="text-center mb-6 ">
  <div class="date-container  col-sm-12 col-md-12 col-lg-12">
    {{ new Date().toLocaleDateString('en-us',{
      weekday:'long',
      year:'numeric',
      month:'long',
      day:'numeric'
    })  }}
    <button @click="logout" type="button" class="logout  btn btn-secondary gap-2 " ><p></p>
      <h6 class="p-2">{{ userProfile.username }}</h6>
      <i class=" p-1 fas fa-sign-out-alt fa-xl"></i></button>
  </div>
</div>

  <!-- Search -->

  <div>
    <searchinput @place-data="addPlace" />
  </div>

  <!-- weather cards -->
  <div class="grid grid-cols-2 gap-4">
    <div v-for="(place,idx) in places" :key="idx">
   <WeatherCard :place="place"  @delete-place="deletePlace"/>
  </div>
  </div>

 </main>


 
</template>

<style scope>
.date-container {
  display: flex;
  justify-content: space-between;
  align-items: center;                    
}
.logout{
  display: flex;
  justify-content: ;
  align-items: center;  
}

</style>
<script setup>
import { reactive, ref} from 'vue'
import searchinput from '../components/searchinput.vue';
import WeatherCard from '../components/weathercard.vue'
import { useRouter } from 'vue-router';

const places = ref([])

const addPlace=(data)=>{
  places.value.push(data)
}

const deletePlace = (name) =>{

if(confirm('Are you sure you want to delete')){
  places.value = places.value.filter((p)=> p.location.name !== name)
} 

}



// Define userProfile as reactive
const userProfile = reactive({
  username: '' // Default value, will be updated if userProfile is found in localStorage
});

const userProfileString = localStorage.getItem('userProfile');
if (userProfileString) {
    // Update userProfile if found in localStorage
    Object.assign(userProfile, JSON.parse(userProfileString));
   
} else {
    console.error("User profile not found in localStorage.");
}

const router = useRouter()

function logout(){
  if(confirm('Are you sure you want to logout')){
    localStorage.removeItem("userProfile");
    localStorage.removeItem("usertoken");
    router.push('/')
   }

}




if(!localStorage.getItem('userProfile')&& !localStorage.getItem('usertoken')){
  router.push('/')
}


</script>
