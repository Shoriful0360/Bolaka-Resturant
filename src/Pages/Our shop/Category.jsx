import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import FoodCard from '../../shared/FoodCard';
import { useState } from 'react';

const Category = ({title="salad"}) => {
    const categories=['salad','pizza','soup','dessert','offered']
    const initialIndex=categories.indexOf(title)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menues]=useMenu()
    const offered=menues.filter(item=>item.category==='offered')
    const dessert=menues.filter(item=>item.category==='dessert')
    const pizza=menues.filter(item=>item.category==='pizza')
    const soup=menues.filter(item=>item.category==='soup')
    const salad=menues.filter(item=>item.category==='salad')
    return (
        <div className='mt-9 text-center '>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
   <div className=' max-w-[500px] mx-auto'>
   <TabList>
      <Tab>SALAD</Tab>
      <Tab>PIZZa</Tab>
      <Tab>SOUPS</Tab>
      <Tab>DESSERTS</Tab>
      <Tab>OFFERED</Tab>
    </TabList>
   </div>

    <TabPanel >
    <div className='grid grid-cols-3 gap-5'>
    {
        salad.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
     }
    </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-3 gap-5'>
    {
        pizza.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
     }
    </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-3 gap-5'>
    {
        soup.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
     }
    </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-3 gap-5'>
    {
        dessert.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
     }
    </div>
    </TabPanel>
    <TabPanel>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-5'>
    {
        offered.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
     }
    </div>
    </TabPanel>
  </Tabs>  
        </div>
    );
};

export default Category;