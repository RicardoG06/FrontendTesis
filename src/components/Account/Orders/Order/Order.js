import { useState } from "react";
import { Image } from "semantic-ui-react";
import { DateTime } from "luxon";
import { forEach, map } from "lodash";
import { BasicModal } from "@/components/Shared";
import styles from "./Order.module.scss";

export function Order(props) {
  const { order } = props;
  const [showModal, setShowModal] = useState(false);
  const createdAt = new Date(order.attributes.createdAt).toISOString();
  const products = order.attributes.products;

  const openCloseModal = () => setShowModal((prevState) => !prevState);

  const getTotalProducts = () => {
    let total = 0;

    forEach(products, (product) => {
      total += product.quantity;
    });

    return total;
  };

  return (
    <>
      <div className={styles.order} onClick={openCloseModal}>
        <div>
          <span>
            {DateTime.fromISO(createdAt, { locale: "es" }).toFormat(
              "dd/MM/yyyy"
            )}
          </span>
          <p>{getTotalProducts()} productos</p>
        </div>

        <p>S/.{order.attributes.totalPayment.toFixed(2)}</p>
      </div>

      <BasicModal
        show={showModal}
        onClose={openCloseModal}
        title="Información del pedido"
      >
        {map(products, (product) => (
          <div className={styles.product}>
            <Image src={product.attributes.cover.data.attributes.url} />

            <div>
              <div className={styles.info}>
                <div>
                  <p>{product.attributes.title}</p>
                  <p>{product.attributes.platform.data.attributes.title}</p>
                </div>
              </div>
              <div className={styles.quantity}>
                <span>x{product.quantity}</span>
                <span>S/.{product.attributes.price}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div className={styles.address}>
          <div>
            <p className={styles.addressInfo}>
              Fecha de la cita : {DateTime.fromISO(order.attributes.appointmentData).setZone("America/Bogota").toFormat("dd/MM/yyyy HH:mm:ss")}
            </p>
          </div>
        </div>

        <div className={styles.address}>
          <div>
            <p >
              Se le enviará un enlace de Google Meet para la reunión mediante el correo electronico brindado
            </p>
          </div>
        </div>


        <div className={styles.total}>
          <p>TOTAL: S/.{order.attributes.totalPayment.toFixed(2)}</p>
        </div>
      </BasicModal>
    </>
  );
}
