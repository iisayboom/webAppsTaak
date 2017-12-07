var Request = require("request");

describe("Server", () => {
  let threadId;
  let userId;
  beforeAll(() => {

  });
  afterAll(() => {});
  /*
  describe("POST /API/recipes", () => {
      let data = {};
      // add a new recipe to our database
      beforeAll((done) => {
          Request(
              { method: 'POST'
              , uri: 'http://localhost:3000/API/recipes'
              , json: true
              , body: {name:"spaghetti"}
              }, (error, response, body) => {
              data.status = response.statusCode;
              data.body = body;
              done();
          }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
      });
      it("status 200", () => {
          expect(data.status).toBe(200);
      });
      it("check body", () => {
          expect(data.body.name).toBe("spaghetti");
          expect(data.body.ingredients.length).toBe(0);
          expect(data.body._id).toBeDefined();
          firstRecipeId = data.body._id;
      });
  });
  describe("POST /API/recipes/ingredients", () => {
      let data = {};
      // add a new recipe to our database
      beforeAll((done) => {
          Request(
              { method: 'POST'
              , uri: `http://localhost:3000/API/recipe/${firstRecipeId}/ingredients`
              , json: true
              , body: {
                  name: "salt",
                  amount: "4",
                  unit: "Gram"
              }
              }, (error, response, body) => {
              data.status = response.statusCode;
              data.body = body;
              done();
          }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
      });
      it("status 200", () => {
          expect(data.status).toBe(200);
      });
      it("check body", () => {
          expect(data.body.name).toBe("salt");
          expect(data.body.amount).toBe(4);
          expect(data.body.unit).toBe("Gram");
          expect(data.body._id).toBeDefined();

      });
  });
  */
  describe("GET /API/allThreads", () => {
    var data = {};
    beforeAll((done) => {
      Request.get("http://localhost:4200/API/threads/getAll", (error, response, body) => {
        data.status = response.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it("Status 200", () => {
      expect(data.status).toBe(200);
    });
    it("Body", () => {
      expect(data.body.length).toBe(0);
    });

  });

  describe("POST /API/newThread", () => {
    let data = {};
    beforeAll((done) => {
      Request({
        method: 'POST',
        uri: 'http://localhost:4200/API/threads/iisayboom/addThread',
        json: true,
        body: {
          titel: "Een klein testje",
          inhoud: "Testen op toevoegen thread"
        }
      }, (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
    });
    it("status 200", () => {
      expect(data.status).toBe(200);
    });
    it("check body", () => {
      expect(data.body.titel).toBe("Een klein testje");
      expect(data.body.inhoud).toBe("Testen op toevoegen thread");
      expect(data.body.posts.length).toBe(0);
      threadId = data.body._id;
      userId = data.body.user;
      expect(data.body.user).toBe(userId);
      expect(data.body._id).toBeDefined();
    });
  });

  describe("DELETE /API/deleteThread", () => {
    var data = {};
    beforeAll((done) => {
      Request.delete(`http://localhost:4200/API/threads/delete/thread/${threadId}/`, (error, response, body) => {
        data.status = response.statusCode;
        done();
      }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
    });
    it("Status 200", () => {
      expect(data.status).toBe(200);
    });

  });

  describe("GET /API/allThreads", () => {
    var data = {};
    beforeAll((done) => {
      Request.get("http://localhost:4200/API/threads/getAll", (error, response, body) => {
        data.status = response.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it("Status 200", () => {
      expect(data.status).toBe(200);
    });
    it("Body", () => {
      expect(data.body.length).toBe(0);
    });

  });

  describe("POST /API/newThread", () => {
    let data = {};
    beforeAll((done) => {
      Request({
        method: 'POST',
        uri: 'http://localhost:4200/API/threads/iisayboom/addThread',
        json: true,
        body: {
          titel: "Een klein testje",
          inhoud: "Testen op toevoegen thread"
        }
      }, (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
    });
    it("status 200", () => {
      expect(data.status).toBe(200);
    });
    it("check body", () => {
      expect(data.body.titel).toBe("Een klein testje");
      expect(data.body.inhoud).toBe("Testen op toevoegen thread");
      expect(data.body.posts.length).toBe(0);
      threadId = data.body._id;
      userId = data.body.user;
      expect(data.body.user).toBe(userId);
      expect(data.body._id).toBeDefined();
    });
  });

  describe("POST /API/newThread", () => {
    let data = {};
    beforeAll((done) => {
      Request({
        method: 'POST',
        uri: 'http://localhost:4200/API/threads/iisayboom/addThread',
        json: true,
        body: {
          titel: "Nog een ander testje",
          inhoud: "Testen op toevoegen van 2 threads"
        }
      }, (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
    });
    it("status 200", () => {
      expect(data.status).toBe(200);
    });
    it("check body", () => {
      expect(data.body.titel).toBe("Nog een ander testje");
      expect(data.body.inhoud).toBe("Testen op toevoegen van 2 threads");
      expect(data.body.posts.length).toBe(0);
      threadId = data.body._id;
      userId = data.body.user;
      expect(data.body.user).toBe(userId);
      expect(data.body._id).toBeDefined();
    });
  });

  describe("GET /API/allThreadsByUser", () => {
    var data = {};
    beforeAll((done) => {
      Request.get("http://localhost:4200/API/Profile/iisayboom/getAllThreadsForUser", (error, response, body) => {
        data.status = response.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it("Status 200", () => {
      expect(data.status).toBe(200);
    });
    it("Body", () => {
      expect(data.body.length).toBe(2);
    });

  });


  /*
  describe("GET /API/recipes", () => {
      var data = {};
      beforeAll((done) => {
          Request.get("http://localhost:3000/API/recipes", (error, response, body) => {
              data.status = response.statusCode;
              data.body = JSON.parse(body);
              done();
          }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
      });
      it("Status 200", () => {
          expect(data.status).toBe(200);
      });
      it("Body", () => {
          expect(data.body.length).toBe(0);
      });
  });
  */
});
