"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserBusiness_1 = require("../../src/business/UserBusiness");
const User_1 = require("../../src/model/User");
describe("Testing UserBusiness.getUserById", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
    test("Should return 'User not found' when user does not exist", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        try {
            const getUserById = jest.fn();
            userDatabase = { getUserById };
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
            yield userBusiness.getUserById("invalid-id");
        }
        catch (err) {
            expect(err.errorCode).toBe(404);
            expect(err.message).toBe("User not found");
        }
    }));
});
describe("Testing UserBusiness.getUserById", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
    test("Should return 'User not found' when user does not exist", () => __awaiter(void 0, void 0, void 0, function* () {
        const getUserById = jest.fn((id) => new User_1.User("id", "Astrodev", "astrodev@gmail.com", "hash", User_1.stringToUserRole("ADMIN")));
        userDatabase = { getUserById };
        const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, tokenGenerator, idGenerator);
        const user = yield userBusiness.getUserById("id");
        expect(getUserById).toHaveBeenCalledWith("id");
        expect(user).toEqual({
            id: "id",
            name: "Astrodev",
            email: "astrodev@gmail.com",
            role: User_1.UserRole.ADMIN,
        });
    }));
});
