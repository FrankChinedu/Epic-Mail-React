import supertest from 'supertest';
import app from '../app';

const server = () => supertest(app);

let accessToken;

const { apiURL } = global;

describe('Message ', () => {
  describe('/Post auth/login', () => {
    it('should create an account for a new user', async () => {
      const data = {
        firstname: 'aerrd',
        lastname: 'angelo',
        email: 'leap@me.com',
        password: '12345678'
      };

      const { status, body } = await server()
        .post(`${apiURL}/auth/signup`)
        .send(data);

      expect(Object.keys(body.data)).toMatchSnapshot();
      expect(status).toBe(201);
    });

    it('should log a user in', async () => {
      const data = {
        email: 'leap@me.com',
        password: '12345678'
      };

      const { status, body } = await server()
        .post(`${apiURL}/auth/login`)
        .send(data);

      accessToken = body.data.token;
      expect(status).toBe(200);
      expect(Object.keys(body.data)).toMatchSnapshot();
    });
  });

  describe('/Post /messages', () => {
    it('user should be able to create or send email', async () => {
      const data = {
        subject: 'awesome subject',
        message: 'thank God i am awesome',
        status: 'draft',
        contactEmail: 'paul@taru.com'
      };

      const { status, body } = await server()
        .post(`${apiURL}/messages`)
        .send(data)
        .set('x-access-token', accessToken);

      expect(status).toBe(201);
      expect(Object.keys(body.data)).toMatchSnapshot();
    });
  });

  describe('/GET /messages', () => {
    it('user should be able to get all received emails as inbox', async () => {
      const { status, body } = await server()
        .get(`${apiURL}/messages`)
        .set('x-access-token', accessToken);

      expect(status).toBe(200);
      expect(Object.keys(body.data)).toMatchSnapshot();
    });
  });

  describe('/GET /messages/unread', () => {
    it('user should be able to get all unread messages', async () => {
      const { status, body } = await server()
        .get(`${apiURL}/messages/unread`)
        .set('x-access-token', accessToken);

      expect(status).toBe(200);
      expect(Object.keys(body.data)).toMatchSnapshot();
    });
  });

  describe('/GET /messages/:id', () => {
    it('user should be able to get a specific user email from the inbox', async () => {
      const { status, body } = await server()
        .get(`${apiURL}/messages/:id`)
        .set('x-access-token', accessToken);
      if (status === 200) {
        expect(status).toBe(200);
        expect(Object.keys(body.data)).toMatchSnapshot();
      } else {
        expect(status).toBe(404);
        expect(Object.keys(body.data)).toMatchSnapshot();
      }
    });
  });

  describe('/GET /messages/sent/:id', () => {
    it('user should be able to get a specific user email from sent messages', async () => {
      const { status, body } = await server()
        .get(`${apiURL}/messages/sent/:id`)
        .set('x-access-token', accessToken);
      if (status === 200) {
        expect(status).toBe(200);
        expect(Object.keys(body.data)).toMatchSnapshot();
      } else {
        expect(status).toBe(404);
        expect(Object.keys(body.data)).toMatchSnapshot();
      }
    });
  });

  describe('/DELETE /messages/:id', () => {
    it('user should be able to delete a message from there inbox', async () => {
      const { status, body } = await server()
        .delete(`${apiURL}/messages/1`)
        .set('x-access-token', accessToken);
      if (status === 202) {
        expect(status).toBe(202);
        expect(Object.keys(body.data)).toMatchSnapshot();
      } else {
        expect(status).toBe(404);
        expect(Object.keys(body.data)).toMatchSnapshot();
      }
    });
  });

  describe('/GET /messages/sent', () => {
    it('user should be able to get all sent messages ', async () => {
      const { status, body } = await server()
        .get(`${apiURL}/messages/sent`)
        .set('x-access-token', accessToken);

      expect(status).toBe(200);
      expect(Object.keys(body.data)).toMatchSnapshot();
    });
  });
});
