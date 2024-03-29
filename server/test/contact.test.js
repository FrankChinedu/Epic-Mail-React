import supertest from 'supertest';
import app from '../app';

const server = () => supertest(app);

let accessToken;

const { apiURL } = global;

describe('Contacts ', () => {
  describe('sign up', () => {
    it('should create an account for a new user', async () => {
      const data = {
        firstname: 'frank',
        lastname: 'angelo',
        email: 'angelo@me.com',
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
    it('should create an account for a new user', async () => {
      const data = {
        firstname: 'john',
        lastname: 'doe',
        email: 'john@doe.com',
        password: '12345678'
      };

      const { status, body } = await server()
        .post(`${apiURL}/auth/signup`)
        .send(data);
      expect(Object.keys(body.data)).toMatchSnapshot();
      expect(status).toBe(201);
    });
  });

  describe('/Post auth/login', () => {
    it('should log a user in', async () => {
      const data = {
        email: 'angelo@me.com',
        password: '12345678'
      };

      const { status, body } = await server()
        .post(`${apiURL}/auth/login`)
        .send(data);
      accessToken = body.data.token;
      expect(Object.keys(body.data)).toMatchSnapshot();
      expect(status).toBe(200);
    });
  });

  describe('Contacts  ', () => {
    it('should add a user to be a contact', async () => {
      const data = {
        email: 'john@doe.com'
      };

      const { status, body } = await server()
        .post(`${apiURL}/contacts`)
        .set('x-access-token', accessToken)
        .send(data);

      expect(Object.keys(body.data)).toMatchSnapshot();
      expect(status).toBe(201);
    });

    it('should not add user if user is already a contact ', async () => {
      const data = {
        email: 'john@doe.com'
      };

      const { status, body } = await server()
        .post(`${apiURL}/contacts`)
        .set('x-access-token', accessToken)
        .send(data);
      expect(Object.keys(body.data)).toMatchSnapshot();
      expect(status).toBe(400);
    });

    it('should get all users contacts', async () => {
      const { status, body } = await server()
        .get(`${apiURL}/contacts`)
        .set('x-access-token', accessToken);

      expect(Object.keys(body.data)).toMatchSnapshot();
      expect(status).toBe(200);
    });

    it("should delete a user's contact ", async () => {
      const { status, body } = await server()
        .delete(`${apiURL}/contacts/1`)
        .set('x-access-token', accessToken);

      expect(Object.keys(body.data)).toMatchSnapshot();
      expect(status).toBe(202);
    });

    it('should return 404 if user is already deleted or does not exist ', async () => {
      const { status, body } = await server()
        .delete(`${apiURL}/contacts/1`)
        .set('x-access-token', accessToken);

      expect(Object.keys(body.data)).toMatchSnapshot();
      expect(status).toBe(404);
    });
  });
});
