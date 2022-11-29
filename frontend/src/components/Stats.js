import { stats } from '../constants';
import styles from '../style'

const Stats = () => (
    <section className={`flex-1 ${styles.flexStart} sm:pl-16 px-6 flex-row flex-wrap sm:mb-20 mb-14`}>
        {stats.map((stat) => (
            <div key={stat.id} className={`flex-1 flex justify-start items-center flex-col sm:flex-row`}>
                <h4 className="font-poppins font-semibold sm:text-[40px] text-[35px] xs:leading-[53px] leading-[43px] text-ash">{stat.value}</h4>
                <p className="font-poppins font-normal sm:text-[20px] text-[16px] xs:leading-[26px] leading-[21px] text-hero_text uppercase ml-3">{stat.title}</p>
            </div>
        ))}
    </section>
)

export default Stats

