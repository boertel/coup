import Head from "next/head";
import coups from "../public/data.json";

export async function getStaticProps({ params }) {
  const years = {};
  coups
    .filter(({ year }) => !!year)
    .forEach(coup => {
      years[coup.year] = years[coup.year] || [];
      years[coup.year].push(coup);
    });
  return { props: { years } };
}

export default function Home({ years }) {
  return (
    <>
      <Head>
        <title>List of coups and coup attempts</title>
      </Head>
      <div style={{ margin: "50px auto", padding: "10px", maxWidth: "800px" }}>
        <h2>List of coups and coup attempts</h2>
        <div>
          <a
            href="https://en.wikipedia.org/wiki/List_of_coups_and_coup_attempts_by_country"
            target="_blank"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            from Wikipedia
          </a>{" "}
          [{" "}
          <a
            href="/data.json"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            json
          </a>{" "}
          |{" "}
          <a
            href="/data.csv"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            csv
          </a>{" "}
          ]
        </div>
        <div>
          {Object.keys(years)
            .sort((a, z) => z - a)
            .map(year =>
              years[year].map((coup, index) => (
                <>
                  {index === 0 && (
                    <>
                      <hr
                        size={1}
                        style={{ marginTop: "60px", height: "1px" }}
                      />
                      <h1>{coup.year}</h1>
                    </>
                  )}
                  <h4 style={{ marginBottom: "6px" }} title={coup.date}>
                    {coup.country}
                  </h4>
                  <p style={{marginTop: 0}}>{coup.text}</p>
                </>
              ))
            )}
        </div>
        <hr size={1} style={{ marginBottom: "40px" }} />
        <div>
          <a
            href="https://en.wikipedia.org/wiki/List_of_coups_and_coup_attempts_by_country"
            target="_blank"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            from Wikipedia
          </a>{" "}
          [{" "}
          <a
            href="/data.json"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            json
          </a>{" "}
          |{" "}
          <a
            href="/data.csv"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            csv
          </a>{" "}
          ]
        </div>
      </div>
    </>
  );
}
