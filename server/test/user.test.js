import supertest from 'supertest';
import app from '../app';

const server = () => supertest(app);

const { apiURL } = global;

describe(' Sign up', () => {
  describe('sign up', () => {
    it('should create an account for a new user ', async () => {
      const data = {
        firstname: 'frank',
        lastname: 'angelo',
        email: 'fangelo@me.com',
        password: '12345678'
      };
      const { status, body } = await server()
        .post(`${apiURL}/auth/signup`)
        .send(data);
      expect(Object.keys(body.data)).toMatchSnapshot();
      expect(status).toBe(201);
    });
  });

  describe('sign up', () => {
    it('should create an account for a new user ', async () => {
      const data = {
        firstname: 'john',
        lastname: 'doe',
        email: 'johlongn@doe.com',
        password: '12345678'
      };

      const { status, body } = await server()
        .post(`${apiURL}/auth/signup`)
        .send(data);
      expect(Object.keys(body.data)).toMatchSnapshot();
      expect(status).toBe(201);
    });
  });

  describe('/Post auth/signup', () => {
    it('should not be able to sign up a new user if password parameter is missing ', async () => {
      const data = {
        firstname: 'frank',
        lastname: 'angelo',
        email: 'angelo@me.com',
        password: ''
      };
      const { status, body } = await server()
        .post(`${apiURL}/auth/signup`)
        .send(data);

      expect(Object.keys(body)).toMatchSnapshot();
      expect(status).toBe(400);
    });
  });

  describe('/Post auth/signup', () => {
    it('should not be able to sign up a new user if first name parameter is missing', async () => {
      const data = {
        firstname: '',
        lastname: 'angelo',
        email: 'angelo@me.com',
        password: '12345678'
      };
      const { status, body } = await server()
        .post(`${apiURL}/auth/signup`)
        .send(data);
      expect(Object.keys(body)).toMatchSnapshot();
      expect(status).toBe(400);
    });
  });

  describe('/Post auth/signup', () => {
    it('should not be able to sign up a new user if no parameter is missing', async () => {
      const data = {};
      const { status, body } = await server()
        .post(`${apiURL}/auth/signup`)
        .send(data);
      expect(Object.keys(body)).toMatchSnapshot();
      expect(status).toBe(400);
    });
  });

  describe('/Post auth/login', () => {
    it('should log a user in', async () => {
      const data = {
        email: 'fangelo@me.com',
        password: '12345678'
      };
      const { status, body } = await server()
        .post(`${apiURL}/auth/login`)
        .send(data);

      expect(Object.keys(body.data)).toMatchSnapshot();
      expect(status).toBe(200);
    });

    it('should not be able to log a user in if wrong parameters are passed', async () => {
      const data = {
        email: 'franki@me.com',
        password: '123456789'
      };
      const { status, body } = await server()
        .post(`${apiURL}/auth/login`)
        .send(data);
      expect(Object.keys(body)).toMatchSnapshot();
      expect(status).toBe(400);
    });
  });
});
