<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #0c192c;
    color: rgb(255, 255, 255);">
   
    
        <ul class="" aria-labelledby="">
          <RouterLink to="/home" class="text-white m-3  "><i class="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;Home</RouterLink>
         <RouterLink to="/dashboard" class="text-white m-3 "><i class='fa fa-dashboard'></i>&nbsp;&nbsp;Dashboard</RouterLink> 
       
        </ul>
  
  </nav>
 
<div class="container">
<RouterView />
</div>
<br>
<br>

    <title>Vue Midterm Project</title>
<section>
    <div class="mt-3">
        <h1 class="text-4xl">Home</h1>
    </div>
    <div class="jumbotron hero text-center text-white">
        <h2>Welcome</h2>
      </div>

      <div class="container">
        <div class="card-deck">
                  <div class="card card1 mt-2 ">
                    <div class="card-body bg-dark">
                      <h5 class="card-title text-center text-white">Office Registrar</h5>
                      <p class="card-text text-center text-white"><br>Lorem ipsum dolor sit amet consectetur adipisicing elit.At necessitatibus perferendis asperiores ut nihil dicta,<br> corporis vitae voluptatum quis sed? Animi eius odit cum ad excepturi? <br>Quibusdam quis doloremque maxime.</p>
                    </div>
                  </div>
               </div>
             </div>

</section>

</template>


<style>
.hero{
    background-image: url('images/bj.jpg');
    margin-top: 3px;
     background-size: 100% 100%;

}
h2{
    font-size: 30vh;
    color: rgb(7, 3, 120);
    text-shadow: rgb(rgb(255, 191, 0), rgb(0, 75, 128), rgb(255, 0, 123));
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.card1{
    background-color: rgb(23, 199, 211);

}

.card-title{
    color: blue;
}

.index{
    margin-top: 20px;
}
p{
    text-align: justify;
}
</style>

    <!-- <div class="home"></div>
    <h1>Welcome to my Homepage :-) </h1>
</template> -->