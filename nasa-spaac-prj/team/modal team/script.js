// function number one

// setinterval

// let i=1
// const autoWriting = () => {
//     let title="playvideo";
//     website.innerText=title.slice(0,i)
//     i++;
//     if(i>title.length)
//     {
//         i=1 
//     }

// };
// let stopAutoFun= setInterval(autoWriting, 1000);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function two

// setinterval

let i=0;
const stopAutoFun=setInterval(
    () => {
        let title="playvideo";
            website.innerText=title.slice(0,i)
            i++;
            if(i>title.length)
            {
                i=1;
                // clearInterval(stopAutoFun);
            }
    }
,300)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>