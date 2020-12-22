const input = [
  {
    DeviceId: 'DeviceId1',
    DeviceType: 'tank',
    TagId: 'D-1-TagId1',
    TagType: 'temperature'
  },
  {
    DeviceId: 'DeviceId1',
    DeviceType: 'tank',
    TagId: 'D-1-TagId2',
    TagType: 'flowmeter'
  },
  {
    DeviceId: 'DeviceId2',
    DeviceType: 'tank',
    TagId: 'D-2-TagId1',
    TagType: 'temperature'
  },
  {
    DeviceId: 'DeviceId2',
    DeviceType: 'tank',
    TagId: 'D-2-TagId2',
    TagType: 'flowmeter'
  },
  {
    DeviceId: 'DeviceId1',
    DeviceType: 'tank',
    TagId: 'D-1-TagId3',
    TagType: 'temperature'
  }
];

const devices = [];

function main() {
  input.forEach(row => {
    createTag(row);
  });

  console.log(JSON.stringify(devices, null, 2));
}

function createDevice(data) {
  const device = {};

  device.DeviceId = data.DeviceId;
  device.DeviceType = data.DeviceId;
  device.Tags = [];

  devices.push(device);
  return device;
}

function createTag(data) {
  devices.find(device => device.DeviceId === data.DeviceId) || createDevice(data);

  const tag = {};
  tag.TagId = data.TagId;
  tag.TagType = data.TagType;

  // device.Tags.push(tag);
}

main();
