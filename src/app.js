
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
        data : 'about'
    },{
        id:1,
        data:'education'
    },{
        id:2,
        data:'skills'
    },{
        id:3,
        data:'experience'
    },{
        id:4,
        data:'contact'
    }
]

const data =[   {
    id:0,
    heading:'ABOUT ME',
    sub_heading:'WHO AM I ?',
    paragraph1 : 'Hi! My name is Pratik Sharma. I am 20 yrs old computer engineering student with a clear vision of becoming a leading software engineer Soon. My keen interest in software development drives me to continually enhance my technical skills.',
    paragraph2 : 'Currently, I am working on my own research to improve my skills by doing some projects and tasks.'
    },
    {
        id:1,
        heading:'EDUCATION',
        sub_heading:'EDUCATION',
        paragraph1 : 'I completed my higher education at Everest English Boarding School, where I laid the foundation for my academic journey.',
        paragraph2 : "Currently, I'm pursuing a Bachelor’s degree in Computer Engineering at Lumbini Engineering College(LEC), affiliated with Pokhara University, and I’m currently in my 5th semester."
    },
    {
        id:2,
        heading:'MY SPECIALITY',
        sub_heading:'MY SKILLS',
        paragraph1 : "I have a strong foundation in web development, proficient in HTML, CSS, Tailwind CSS, JavaScript, PHP, and Laravel. I’m capable of building projects with these technologies and am focused on enhancing my expertise, particularly in JavaScript and Laravel, to achieve greater precision and mastery.",
        paragraph2 : ''
    },
    {    
        id:3,
        heading:'EXPERIENCE',
        sub_heading:'WORK EXPERIENCE',
        paragraph1 : "While I don't have formal job experience yet, I am dedicated to becoming a full-stack developer and app development specialist. I am actively working on personal projects to build my skills and gain practical experience in these areas.",
        paragraph2 : ''
    },
    {
        id:4,
        heading:'GET IN TOUCH',
        sub_heading:'CONTACT',
        paragraph1 : "INFO : prayiksharma23@gmail.com <br><br> ADDRESS : Kalikanagar-10,Butwal,Nepal",
        paragraph2 : 'PHONE : +977 9840697481'
    } 
]

const info_data_div = document.querySelector('.info_data_div')
const innerhtml_data = (index)=>{
        let innerHTML = ''
      data.forEach((v,i)=>{
        innerHTML += `
            <div class=" bg-[#D6BD98] rounded-[10px] w-[100%] mx-auto font-[static] info_value absolute " id="${info_href[index].data}" >
            <span class="block h-[40px] m-[20px] px-[20px] flex  items-center text-[13px] font-[100] tracking-[1px] "><h1 class="">${data[index].heading}</h1></span>
            <div class="flex mx-[10px] mt-[30px]" >
               <p class="block text-[28px] font-semibold px-[50px] tracking-[2px]">${data[index].sub_heading}</p>
            </div>
            <div class="w-[100%] text-left p-[40px] text-[20px] font-[400]">
                 <p class="pb-[26px]">${data[index].paragraph1}</p>
                 <p class="pb-[20px]">${data[index].paragraph2}</p>
            </div>
            </div>
            `
        })
        info_data_div.innerHTML = innerHTML
    }

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
    
const data_lg = document.querySelectorAll('.data_lg')
data_lg.forEach((v,i)=>{
     v.addEventListener('click',()=>{
        const main_div = document.querySelector('.main_div')
        const main_grid = document.querySelector('.main_grid')
        const info_data_div = document.querySelector('.info_data_div')
                  main_div.classList.remove('lg:flex','lg:justify-center')
                  main_grid.classList.remove('lg:w-[500px]')
                  main_grid.classList.add('lg:grid-cols-[25%_55%]')
                  main_grid.classList.add('gap-6')
                  info_data_div.classList.add('lg:block')
                  innerhtml_data(i)
                  })


     })

    