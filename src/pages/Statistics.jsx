import { useEffect, useState } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
        document.title = "Statistics | Gadget Heaven";
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen pb-20">
             <div className="bg-[#9538E2] text-white text-center py-8 mb-8">
                <h2 className="text-3xl font-bold mb-4">Statistics</h2>
                <p className="max-w-2xl mx-auto px-4">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>
            
            <div className="container mx-auto px-4 md:px-12">
                 <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <h3 className="text-xl font-bold mb-6">Statistics</h3>
                      <div className="h-[500px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart
                            data={data}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                            >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="product_title" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="price" fill="#EAD5F8" stroke="#8884d8" />
                            <Bar dataKey="price" barSize={20} fill="#9538E2" />
                            <Scatter dataKey="rating" fill="red" />
                            </ComposedChart>
                        </ResponsiveContainer>
                      </div>
                 </div>
            </div>
        </div>
    );
};

export default Statistics;
