import dataLavori from "../../data/data.json";

const Work = ({ params }) => {
  const slug = params.work;

  const workCorrispondenti = dataLavori.find((work) => work.slug === slug);

  console.log(workCorrispondenti);

  return (
    <div>
      <div>
        <div>
          <h1 class="text-white"> {workCorrispondenti.name}</h1>
        </div>
      </div>
    </div>
  );
};
export default Work;
