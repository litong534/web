function a(){
  setTimeout(()=>{
    console.log(this);
  },100);
}

a();