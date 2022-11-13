import bgImg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div>
            <div className="hero lg:py-20" style={{
                backgroundImage: `url(${bgImg})`
            }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='banner' className="w-full lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='mx-auto shadow-xl rounded-2xl p-6'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;