import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

const should = chai.should();

chai.use(chaiHttp);

const { apiURL } = global;

describe('Auth Sign up', () => {
  describe('/Post auth/signup', () => {
    it('user should be able to sign up', (done) => {
      const data = {
        firstName: 'frank',
        lastName: 'angelo',
        email: 'frank@me.com',
        password: '12345678',
      };
      chai.request(server)
        .post(`${apiURL}/auth/signup`)
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          should.exist(res.body);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          res.body.data.should.have.property('token');
          res.body.status.should.equal(200);
        });
      done();
    });
  });

  describe('/Post auth/login', () => {
    it('user should be able to login', (done) => {
      const data = {
        email: 'frank@me.com',
        password: '12345678',
      };
      chai.request(server)
        .post(`${apiURL}/auth/login`)
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          should.exist(res.body);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          res.body.data.should.have.property('token');
          res.body.status.should.equal(200);
        });
      done();
    });

    it('user should not be able to login if wrong parameters are passed', (done) => {
      const data = {
        email: 'franki@me.com',
        password: '123456789',
      };
      chai.request(server)
        .post(`${apiURL}/auth/login`)
        .send(data)
        .end((err, res) => {
          res.should.have.status(403);
          should.exist(res.body);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('error');
        });
      done();
    });
  });
});
