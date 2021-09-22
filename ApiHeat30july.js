





describe("verify api functionality",()=>{
it('verify the get api',()=>{
    cy.request({
        method:"GET",
        url:"https://reqres.in/api/users/2"
    }).then((responce)=>{
        expect(responce.status).to.eql(200)
    })
})

it ("verify the put api",()=>{
  cy.request({
      method:"PUT",
      url:"https://reqres.in/api/users/2",
      body:{
        name: "morpheus",
        job: "zion resident"
    }
  }).then((responce)=>{
      expect(responce.status).to.eql(200)
  })
})
it ("Verify the post api",()=>{
    cy.request({
        method:"POST",
        url:"https://reqres.in/api/users",
        body:{
            name: "morpheus",
            job: "leader"
        }
    }).then((reposnce)=>{
        expect(reposnce.status).to.eql(201)
    })
})
it ("Verify the delete api",()=>{
    cy.request({
        method:"DELETE",
        url:"https://reqres.in/api/users/2"
    }).then((responce)=>{
        expect(responce.status).to.eql(204)
    })
})
})

