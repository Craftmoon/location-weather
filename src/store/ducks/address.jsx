export const Types = {
  UPDATE: "address/UPDATE"
};

// --- reducers

const INITIAL_STATE = "";

export default function address(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPDATE:
      return action.payload.address;
    default:
      return state;
  }
}

// --- actions

export const Creators = {
  updateAddress: address => ({
    type: Types.UPDATE,
    payload: {
      address: address
    }
  })
};
