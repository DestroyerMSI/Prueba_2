import { Helmet } from "react-helmet";
import { UseMarcador_Provider } from "../Context/Marcador";
import styles from "../styles/Dashboard_style.module.css";
import { useEffect, useState } from "react";
import User_Icon from "../assets/usuario.png";
interface Interfacealtura {
  alto: string;
}
interface InterfaceRangos {
  width: string;
}
export default function Dashboard() {
  const [alturas, setalturas] = useState<Interfacealtura[]>([
    { alto: "0px" },
    { alto: "0px" },
    { alto: "0px" },
    { alto: "0px" },
    { alto: "0px" },
    { alto: "0px" },
    { alto: "0px" },
    { alto: "0px" },
  ]);
  const [loading, setloading] = useState<boolean>(true);
  const marcador_context = UseMarcador_Provider();
  const [rangos, setrangos] = useState<InterfaceRangos[]>([]);
  useEffect(() => {
    marcador_context.setmarcador(0);
    const alturasBarras = [
      { alto: "40px" },
      { alto: "46px" },
      { alto: "60px" },
      { alto: "49px" },
      { alto: "50px" },
      { alto: "40px" },
      { alto: "60px" },
      { alto: "50px" },
    ];
    setalturas(alturasBarras);
    setrangos([
      { width: "20%" },
      { width: "70%" },
      { width: "80%" },
      { width: "40%" },
    ]);
    setloading(false);
  }, []);

  return (
    <>
      <Helmet>
        <title>Your Title | Dashboard</title>
        <meta name="description" content="Your meta description" />
      </Helmet>
      <section className={styles.section_main}>
        <div className={styles.div_user_content}>
          <div className={styles.img_container}>
            <div className={styles.div_img}>
              <img src={User_Icon} alt="Foto de usuario" />
            </div>
            <span>User Name</span>
            <div
              style={{
                marginLeft: "10px",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "rgb(32, 247, 4)",
              }}
            ></div>
          </div>
        </div>
        <div className={styles.fila_1}>
          <div className={styles.div_cajas_fila_1}>
            <p>Lorem Ipsum</p>
            <div className={styles.div_porcentaje}>
              <div className={styles.porcentaje}>
                <p>25%</p>
              </div>
              <div className={styles.indicador} style={{ height: "25%" }}></div>
            </div>
            <p className={styles.p2}>Lorem ipshum Lorem</p>
          </div>
          <div className={styles.div_cajas_fila_11}>
            <p>Lorem Ipsum</p>
            <span>$ 10,000</span>
            <p className={styles.p2}>Lorem ipshum Lorem</p>
            <div className={styles.graficas}>
              {alturas.length > 0 && (
                <>
                  <div
                    className={styles.barra}
                    style={{
                      height: alturas[0].alto,
                      background: "rgb(255, 0, 0)",
                    }}
                  ></div>
                  <div
                    className={styles.barra}
                    style={{
                      height: alturas[1].alto,
                      background: "rgb(0, 255, 0)",
                    }}
                  ></div>
                  <div
                    className={styles.barra}
                    style={{
                      height: alturas[2].alto,
                      background: "rgb(255, 165, 0)",
                    }}
                  ></div>
                  <div
                    className={styles.barra}
                    style={{
                      height: alturas[3].alto,
                      background: "rgb(0, 0, 255)",
                    }}
                  ></div>
                  <div
                    className={styles.barra}
                    style={{
                      height: alturas[4].alto,
                      background: "rgb(128, 0, 128)",
                    }}
                  ></div>
                  <div
                    className={styles.barra}
                    style={{
                      height: alturas[5].alto,
                      background: "rgb(255, 255, 0)",
                    }}
                  ></div>
                  <div
                    className={styles.barra}
                    style={{
                      height: alturas[6].alto,
                      background: "rgb(255, 165, 0)",
                    }}
                  ></div>
                  <div
                    className={styles.barra}
                    style={{
                      height: alturas[7].alto,
                      background: "rgb(128, 0, 128)",
                    }}
                  ></div>
                </>
              )}
            </div>
          </div>
          <div className={styles.div_cajas_fila_2}>
            <p className={styles.p3}>Lorem ipshum Lorem</p>
          </div>
        </div>
        <div className={styles.filas_2_3}>
          <div className={styles.div_cajas_fila_2_3}>
            <ul>
              <li style={{ color: " #f73505" }}>
                <article>
                  <h4>Lorem ipsumm</h4>
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat quaerat asperiores possimus, esse praesentium
                  </span>
                </article>
              </li>
              <li style={{ color: " #ec4e1e" }}>
                <article>
                  <h4>Lorem ipsumm</h4>
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat quaerat asperiores possimus, esse praesentium
                 </span>
                </article>
              </li>
              <li style={{ color: " #fce517" }}>
                <article>
                  <h4>Lorem ipsumm</h4>
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat quaerat asperiores possimus, esse praesentium
                  </span>
                </article>
              </li> 
              <li style={{ color: "# 75f81d" }}>
                <article>
                  <h4>Lorem ipsumm</h4>
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat quaerat asperiores possimus, esse praesentium
                  </span>
                </article>
              </li>
              <div className={styles.div_boder}></div>
            </ul>
        
          </div>
          <div className={styles.div_cajas_fila_2_1}>
            <div className={styles.div_cajas_fila_2_1_h_1}>
              <h4>Lorem Ipsum</h4>
              <div className={styles.div_flex}>
                <div className={styles.div_flex_1}>
                  <div className={styles.div_conteiner_3}>
                    <span>Lorem Ipsum</span>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quod molestiae deleniti aperiam, beatae ex quis pariatur
                      adipisci a officiis architecto in officia quisquam
                      perferendis enim! Ea nostrum dolorum doloribus quaerat!
                    </p>
                  </div>
                  <div className={styles.div_conteiner_3}>
                    <span>Lorem Ipsum</span>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quod molestiae deleniti aperiam, beatae ex quis pariatur
                      adipisci a officiis architecto in officia quisquam
                      perferendis enim! Ea nostrum dolorum doloribus quaerat!
                    </p>
                  </div>
                  <div className={styles.div_conteiner_3}>
                    <span>Lorem Ipsum</span>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quod molestiae deleniti aperiam, beatae ex quis pariatur
                      adipisci a officiis architecto in officia quisquam
                      perferendis enim! Ea nostrum dolorum doloribus quaerat!
                    </p>
                  </div>
                </div>
                <div className={styles.div_botones_ipsum}>
                  <button>Lorem Ipsum</button>
                  <button>Lorem Ipsum</button>
                  <button>Lorem Ipsum</button>
                </div>
              </div>
            </div>
            <div className={styles.div_cajas_fila_2_1_h_2}>
              {loading ? (
                <div className={styles.div_carganod}>
                  <div
                    style={{
                      background: "white",
                      width: "60%",
                      height: "60%",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
              ) : (
                <>
                  {rangos.map((singleitem) => {
                    return (
                      <div
                        className={styles.div_range_render}
                        key={singleitem.width}
                      >
                        <span>Lorem Ipshum</span>
                        <div className={styles.input_div_range}>
                          <div
                            style={{ width: singleitem.width, height: "100%" }}
                          ></div>
                        </div>
                        <div style={{ width: "90%" }}>
                          <p>Lorem</p>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
          <div className={styles.div_cajas_fila_2_3_4}>
            <div>
              <span>Lorem Ipsum</span>
              <span style={{fontSize:'0.7rem'}}>
                <small>LoremIpsum xxxxxxx</small>
              </span>
              <p>
                <strong>$ 45,000</strong>
              </p>
            </div>
            <div>
              <span>Lorem Ipsum</span>
              <span style={{fontSize:'0.7rem'}}>
                <small>LoremIpsum xxxxxxx</small>
              </span>
              <p>
                <strong>30%</strong>
              </p>
            </div>
            <div>
              <span>Lorem Ipsum</span>
              <span style={{fontSize:'0.7rem'}}>
                <small>LoremIpsum xxxxxxx</small>
              </span>
              <p>
                <strong>1,250</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
