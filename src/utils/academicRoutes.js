export const getRecordKey = (record) => record?.slug || record?._id || record?.id;

export const getRecordPath = (record) => encodeURIComponent(String(getRecordKey(record) || ''));

export const getArrayPayload = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (payload?.data) return [payload.data];
  return [];
};
