



describe('paypal request', () => {
    let token = null
    it('Generate Token', () => {
        cy.request({
            method: 'POST',
            url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
            form: true,
            headers: {
                authorization: "Basic QVpmTE03cVNMd29aQ0pIRXNsUHpyR1NSY3RRQXVJZGtaX1RScEpjbHlKOXZuZXAtN1lXZGpBUkZhQVJhTlBCQ2p5SHpERWFHdDgtOGJYMUs6RU95YlhUU2dDc3RIMW1pT0xSMldTNXlDV0tYcEp3a1NjSG0xZ2cxc2EwbEdkZ2lCVjNrRFNRb1AxOFRzcmRhLS1oa3hsVUxsazdCYjNhY0E="
            },
            body: {
                grant_type: "client_credentials"
            }
        }).then((response) => {
            expect(response.status).to.be.eql(200)
            expect(response.duration).to.be.lessThan(6000)
            expect(response.body).contains({
                "token_type": "Bearer",
                "app_id": "APP-80W284485P519543T"
            })
        })
    })

    it('Create order', () => {
        cy.request({
            method: "POST",
            url: "https://api-m.sandbox.paypal.com/v2/checkout/orders",
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: {
                "intent": "CAPTURE",
                "purchase_units": [
                    {
                        "amount": {
                            "currency_code": "USD",
                            "value": "100.00"
                        }
                    }
                ]
            }

        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })
})


