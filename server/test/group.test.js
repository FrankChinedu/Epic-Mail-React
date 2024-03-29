import supertest from 'supertest';
import app from '../app';

const server = () => supertest(app);

let accessToken;

const { apiURL } = global;

describe('Groups ', () => {
  describe('/Post auth/login', () => {
    it('should create an account for a new user', async () => {
      const data = {
        firstname: 'aerrd',
        lastname: 'jamal',
        email: 'jamal@me.com',
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
        email: 'jamal@me.com',
        password: '12345678'
      };

      const { status, body } = await server()
        .post(`${apiURL}/auth/login`)
        .send(data);
      expect(status).toBe(200);
      accessToken = body.data.token;
      expect(Object.keys(body.data)).toMatchSnapshot();
    });
  });

  describe('Groups ', () => {
    it('should create a group', async () => {
      const data = {
        name: 'group test'
      };

      const { status, body } = await server()
        .post(`${apiURL}/groups`)
        .send(data)
        .set('x-access-token', accessToken);

      expect(Object.keys(body.data)).toMatchSnapshot();
      expect(status).toBe(201);
    });

    it('should get all users groups', async () => {
      const { status, body } = await server()
        .get(`${apiURL}/groups`)
        .set('x-access-token', accessToken);

      expect(Object.keys(body.data)).toMatchSnapshot();
      expect(status).toBe(200);
    });

    it('should update a groups name', async () => {
      const { status, body } = await server()
        .patch(`${apiURL}/groups/1/name`)
        .set('x-access-token', accessToken);

      expect(Object.keys(body.data)).toMatchSnapshot();
      expect(status).toBe(200);
    });

    it('should return 404 if not found group', async () => {
      const { status, body } = await server()
        .patch(`${apiURL}/groups/2/name`)
        .set('x-access-token', accessToken);

      expect(Object.keys(body.data)).toMatchSnapshot();
      expect(status).toBe(404);
    });

    it('should delete a users group that they own', async () => {
      const { status, body } = await server()
        .delete(`${apiURL}/groups/1`)
        .set('x-access-token', accessToken);

      expect(Object.keys(body.data)).toMatchSnapshot();
      expect(status).toBe(202);
    });

    it('should add users to a particular group', async () => {
      const data = {
        emails: ['john@doe.com']
      };

      const { status, body } = await server()
        .post(`${apiURL}/groups/1/users`)
        .send(data)
        .set('x-access-token', accessToken);

      if (status === 200) {
        expect(Object.keys(body.data)).toMatchSnapshot();
        expect(status).toBe(200);
      } else {
        expect(Object.keys(body.data)).toMatchSnapshot();
        expect(status).toBe(400);
      }
    });

    it('should send a bulk message to all the members in the group', async () => {
      const data = {
        subject: 'something amazing',
        message: 'there would be group meeting',
        status: 'sent'
      };

      const { status, body } = await server()
        .post(`${apiURL}/groups/1/messages`)
        .send(data)
        .set('x-access-token', accessToken);

      if (status === 201) {
        expect(Object.keys(body.data)).toMatchSnapshot();
        expect(status).toBe(201);
      } else {
        expect(Object.keys(body.data)).toMatchSnapshot();
        expect(status).toBe(403);
      }
    });

    it('should delete a memeber from your group', async () => {
      const { status, body } = await server()
        .delete(`${apiURL}/groups/1/users/1`)
        .set('x-access-token', accessToken);
      if (status === 202) {
        expect(Object.keys(body.data)).toMatchSnapshot();
        expect(status).toBe(202);
      } else {
        expect(Object.keys(body.data)).toMatchSnapshot();
        expect(status).toBe(403);
      }
    });
  });
});
