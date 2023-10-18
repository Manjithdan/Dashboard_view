import React from 'react'
import 
{ PiHandsClappingFill}
 from 'react-icons/pi'
 import 
{AiOutlineDollarCircle}
 from 'react-icons/ai'
 import 
{FaBagShopping}
 from 'react-icons/fa6'
 import 
{MdOutlineAccountBalanceWallet}
 from 'react-icons/md'
 import 
{RiPagesLine}
 from 'react-icons/ri'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line,PieChart,Pie } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Jan',
          
          
        },
        {
          name: 'Feb',
         
         
        },
        {
          name: 'Mar',
          
         
        },
        {
          name: 'April',
          
         
        },
        {
          name: 'May',
        
         
        },
        {
          name: 'Jun',
          
        
        },
        {
          name: 'July',
          uv: 1000,
         
        },
        {
          name: 'Aug',
          uv: 2000,
         
        },
        {
          name: 'Sep',
          uv: 200,
         
        },
        {
          name: 'Oct',
          
         
        },
        {
          name: 'Nov',
          
         
        },
        {
          name: 'Dec',
          
         
        },
      ];

      const datae = [
        { name: "Facebook", users: 2000000000 },
        { name: "Instagram", users: 1500000000 },
        { name: "Twiter", users: 1000000000 },
        { name: "Telegram", users: 500000000 },
      ];
     

  return (
    <main className='main-container'>
       <div className='main-title'>
            <h3>Hello Manjith K M <PiHandsClappingFill className='card_icon'/></h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                   
                    <AiOutlineDollarCircle className='card_icon'/>
                    <h3>Earning</h3>
                </div>
                <h1>$300k</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    
                    <RiPagesLine className='card_icon'/>
                    <h3>Orders</h3>
                </div>
                <h1>$12k</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    
                    <MdOutlineAccountBalanceWallet className='card_icon'/>
                    <h3>Balance</h3>
                </div>
                <h1>$3.3k</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    
                    <FaBagShopping className='card_icon'/>
                    <h3>Total Sales</h3>
                </div>
                <h1>$42k</h1>
            </div>
        </div>
        <div className='main-container-inner'>
        <h3>Overview</h3>
         <p className='text-primary'>Monthly Earning</p>
        <div className='charts'>
            <ResponsiveContainer width="110%" height="100%">
            <BarChart
           
            data={data}
           
            
            >
              
                <XAxis dataKey="name" />
               
                
               
                
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="110%" height="100%">
            <PieChart width={600} height={200}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={datae}
            cx={180}
            cy={140}
            outerRadius={110}
            fill="#8884d8"
            label
            
          />
          
        </PieChart>
            </ResponsiveContainer>
            

          

        </div>
        </div>
    </main>
  )
}

export default Home