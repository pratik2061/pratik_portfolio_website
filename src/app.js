
const href_data = [
    { id : 0,
        data : 'https://www.facebook.com/profile.php?id=100025095940214'
    },{
        id : 1,
        data : 'https://www.instagram.com/pra_tik_s/'
    },{
        id :2,
        data : 'https://github.com/pratik2061'
    }
]
const s_media = document.querySelectorAll('.s_media')
s_media.forEach((v,i)=>{
    v.addEventListener('click',()=>{
     v.href = `${href_data[i].data}`
    })
})
  