import { Form, FormGroup, Input } from "reactstrap";
const Filter = () => {
  return (
    <div className="text-center p-5">
      <h1>Blogs & Articles</h1>
      <small className="text-muted ls">#1 Blog flatform about coding</small>
      <Form className="m-5">
        <div className="d-flex justify-content-center">
          <FormGroup>
            <div className="input-group">
              <Input
                type="text"
                className="form-control"
                placeholder="Search this blog"
              />
              <div className="input-group-append">
                <button className="btn btn-serach" type="button">
                  <i className="bx bx-search"></i>
                </button>
              </div>
            </div>
          </FormGroup>
        </div>
      </Form>
    </div>
  );
};

export default Filter;
