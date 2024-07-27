
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
const info_href = [
    {
        id:  0,
        data : '#about'
    },{
        id:1,
        data:'#education'
    },{
        id:2,
        data:'#skills'
    },{
        id:3,
        data:'#experience'
    },{
        id:4,
        data:'#contact'
    }
]
const s_media = document.querySelectorAll('.s_media')
s_media.forEach((v,i)=>{
    v.addEventListener('click',()=>{
     v.href = `${href_data[i].data}`
    })
})
  
const menu = document.querySelector('.menu')
menu.addEventListener('click',()=>{
    menu.classList.toggle('rotate-180')
    const info = document.querySelector('.info')
    info.classList.toggle("hidden")
    const menu_section = document.querySelector('.menu_section')
    menu_section.classList.toggle('scale-y-100')
    menu_section.classList.toggle('h-[350px]')
})
const m_div = ()=>{
    const main_div = document.querySelector('.main_div')
    main_div.classList.remove('lg:flex','lg:justify-center')
}
const m_grid = ()=>{
    const main_grid = document.querySelector('.main_grid')
    main_grid.classList.remove('lg:w-[500px]')
    main_grid.classList.toggle('lg:grid-cols-[25%_55%]')
    main_grid.classList.toggle('gap-6')

}
    
const data_lg = document.querySelectorAll('.data_lg')
data_lg.forEach((v,i)=>{
    v.addEventListener('click',()=>{
        v.href = `${info_href[i].data}`
        m_div()
        m_grid()
        const info_data_div = document.querySelector('.info_data_div')
        info_data_div.classList.toggle('lg:block')
    })
})