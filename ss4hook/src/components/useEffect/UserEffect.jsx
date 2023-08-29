import { useEffect, useState } from "react";

// c1: UserEffect(callback)
// + callback se duoc goi khi component duoc mounted (mounted co nghia la comp duoc gan vao DOM)
// + callback duoc goi khi comp duoc gan vao DOM
// + callback se duoc goi khi state thay doi (it dung )


// c2: UserEffect(callback,[])
// + callback se duoc goi khi component duoc mounted (mounted co nghia la comp duoc gan vao DOM)
// + callback chi duoc goi trong lan dau tien comp duoc render <=> tuong duong vs componentDidMount trong lifecycle


// c3: UserEffect(callback,[deps])
// + callback se duoc goi khi component duoc mounted (mounted co nghia la comp duoc gan vao DOM)
// + callback duoc goi khi dependency(co the la state. props. hoac du lieu gi do) thay doi

function UserEffect() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    // su dung c1:
    // const [name, setName] = useState('')
    // useEffect(() => {
    //     //  thay doi tieu de tren tab trinh duyet
    //     console.log('useEffect o cach thu nhat duoc goi');
    //     document.title = name;
    // })

    // su dung c2:
    // const [name, setName] = useState('')
    // useEffect(() => {
    //     //  phu hop cho viec goi API de hien thi thong tin
    //     console.log('useEffect o cach thu 2 duoc goi...');
    // }, [])

    // su dung c3:
    useEffect(() => {
        console.log('useEffect o cach thu 3 duoc goi...', name);
    }, [name]);  //dependency
    useEffect(() => {
        console.log('useEffect o cach thu 3 duoc goi...', email);
    }, [email]);  // su dung toan tu 3 dau "=" , de so sanh

    const handleSubmit = (e) => {
        e.preventDefault()
        // lay du lieu tu cac o imput, va gui len server
        const newUser = {
            name: name,
            email: email,
        }
        localStorage.setItem('user', JSON.stringify(newUser))
        console.log('newUser', newUser);
    }

    return (
        <>
            {/* su dung c1,c2 */}
            {/* {console.log("render lan dau")}
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} /> */}

            <h1>hello ae</h1>

            {console.log('render lan dau')}
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="enter userName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>

        </>
    );
}

export default UserEffect;