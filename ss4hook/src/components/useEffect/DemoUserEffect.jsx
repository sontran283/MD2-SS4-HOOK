import { useEffect, useState } from "react";

function DemoUserEffect() {
    // dependency(deps) la su phu thuoc ve mat du lieu

    //  chia nho ra de hoc, co 3 truong hop
    //  userEffect(callback)
    //  userEffect(callback, [])
    //  userEffect(callback, [deps])


    //--------------truong hop 1--------------
    // callback luon duoc goi sau khi comp mounted (mounted co nghia la comp duoc gan vao DOM)
    // goi callback moi khi comp re-render
    // callback se duoc goi khi state thay doi (it dung ), callback sau khi comp them element vao DOM

    const [title, setTitle] = useState('')


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(ret => ret.json())
            .then(posts => {
                console.log(posts);
            })
    })



    return (
        <>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

        </>
    );
}

export default DemoUserEffect;