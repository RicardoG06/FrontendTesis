import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Separator } from "@/components/Shared";
import { ENV } from "@/utils";
import { Payment } from "./Payment";
import { Resume } from "./Resume";
import DatePicker from "react-datepicker";
import styles from "./StepTwo.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const stripeInit = loadStripe(ENV.STRIPE_TOKEN);

export function StepTwo(props) {
  const { games } = props;
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Elements stripe={stripeInit}>
      <div className={styles.stepTwo}>
        <div className={styles.center}>
              <h2  >Selección de fecha</h2>

          <DatePicker style={{ color: "green" }}
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            showTimeSelect
            onSelect={(date) => setSelectedDate(date)}
            />
        <div>

      </div>
          <Separator height={50} />
          <Payment />
      </div>

        <div className={styles.right}>
        <Resume games={games} appoinmentDate={selectedDate} />
        </div>
      </div>
    </Elements>
  );
}
