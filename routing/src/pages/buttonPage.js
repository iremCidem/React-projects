import Button from "../components/button";

function ButtonPage() {
  return (
    <div className="App">
      <div>
        <Button rounded className="mb-3">
          batu
        </Button>
      </div>
      <div>
        <Button primary>iro</Button>
      </div>
      <div>
        <Button primary rounded>
          sfs
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
