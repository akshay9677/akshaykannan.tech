import React from "react";
import School from "../images/Pushpanjali.jpg";
import College from "../images/college.png";
import Full from "../images/full.svg";
import Facilio from "../images/facilio-blue.svg";

function Journey(props) {
  const styles = {
    image: {
      width: "12rem",
      height: "8rem",
      borderRadius: "0.8rem",
      margin: "10px",
    },
    imageFacilio: {
      width: "12rem",
      height: "8rem",
      borderRadius: "0.8rem",
      margin: "10px",
      padding: "1.5rem 1.2rem",
      backgroundColor: "#EfEfEf",
    },
    locationName: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: props.dark ? "white" : "black",
    },
    location: {
      fontSize: "0.8rem",
      color: props.dark ? "white" : "black",
    },
    description: { fontSize: "0.9rem", color: "#888", width: "25rem" },
  };
  return (
    <div
      id='journey'
      style={
        props.dark
          ? { backgroundColor: "#242526" }
          : { backgroundColor: "white" }
      }
    >
      <div
        className='text-center'
        style={props.dark ? { color: "white" } : { color: "#313842" }}
      >
        <div data-aos='fade-in' className='bio' data-aos-delay='500'>
          My Journey
        </div>
      </div>
      <div className='flex-col'>
        <div className='row flex-center'>
          <img style={styles.image} src={School} alt='School' />
          <div
            className='flex-col'
            style={{
              margin: "10px",
            }}
          >
            <div style={styles.locationName}>Swamys' MHSS</div>
            <div style={styles.location}>Chennai, IN</div>
            <div style={styles.description}>
              <div className='p10'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est,
              </div>
              <div className='p10'>
                omnis dolor repellendus. Temporibus autem quibusdam et aut
                officiis debitis aut rerum necessitatibus saepe eveniet ut et
                voluptates repudiandae sint et molestiae non recusandae. Itaque
                earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                voluptatibus maiores alias consequatur aut perferendis doloribus
                asperiores repellat. At vero eos et accusamus et iusto odio
                dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi
                sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum
                fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat.
              </div>
            </div>
          </div>
        </div>

        <div className='row flex-center'>
          <img style={styles.image} src={College} alt='School' />
          <div
            className='flex-col'
            style={{
              margin: "10px",
            }}
          >
            <div style={styles.locationName}>SSN College Of Engineering</div>

            <div style={styles.location}>Chennai, IN</div>
            <div style={styles.description}>
              <div className='p10'>
                At vero eos et accusamus et iusto odio dignissimos ducimus
                blanditiis praesentium voluptatum deleniti atque corrupti quos
              </div>
              <div className='p10'>
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est,
              </div>
            </div>
          </div>
        </div>

        <div className='row flex-center m10'>
          <img
            style={{ ...styles.imageFacilio, backgroundColor: "black" }}
            src={Full}
            alt='School'
          />
          <div
            className='flex-col'
            style={{
              margin: "10px",
            }}
          >
            <div style={styles.locationName}>Full Creative</div>
            <div style={styles.location}>Chennai, IN</div>
            <div style={styles.description}>
              <div className='p10'>
                At vero eos et accusamus et iusto odio dignissimos ducimus
                blanditiis praesentium voluptatum deleniti atque corrupti quos
              </div>
              <div className='p10'>
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est,
              </div>
            </div>
          </div>
        </div>

        <div className='row flex-center m10 p10'>
          <img style={styles.imageFacilio} src={Facilio} alt='School' />
          <div
            className='flex-col'
            style={{
              margin: "10px",
            }}
          >
            <div style={styles.locationName}>Facilio</div>
            <div style={styles.location}>Chennai, IN</div>
            <div style={styles.description}>
              <div className='p10'>
                At vero eos et accusamus et iusto odio dignissimos ducimus
                blanditiis praesentium voluptatum deleniti atque corrupti quos
              </div>
              <div className='p10'>
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est,
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
