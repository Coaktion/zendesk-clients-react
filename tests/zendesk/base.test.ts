import { ZendeskClientBase } from '../../src/zendesk/base';
import { PayloadRequest } from '../../src/zendesk/types';

const mockZendeskClient = {
  on: jest.fn(),
  invoke: jest.fn(),
  request: jest.fn(),
  get: jest.fn(),
  set: jest.fn(),
  trigger: jest.fn()
};

const fakerFn = jest.fn();

describe('ZendeskClientBase', () => {
  let zendeskClientBase: ZendeskClientBase;
  beforeEach(() => {
    jest.resetAllMocks();
    zendeskClientBase = new ZendeskClientBase(mockZendeskClient);
  });

  it('should be defined', () => {
    expect(ZendeskClientBase).toBeDefined();
  });

  it('should call appOnRegister when param is passed', () => {
    zendeskClientBase.appOnRegister(fakerFn);
    expect(mockZendeskClient.on).toHaveBeenCalledWith(
      'app.registered',
      expect.any(Function)
    );
  });

  it('should call appOnActivate when param is passed', () => {
    zendeskClientBase.appOnActivate(fakerFn);
    expect(mockZendeskClient.on).toHaveBeenCalledWith(
      'app.activated',
      expect.any(Function)
    );
  });

  it('should call onRequesterChange when param is passed', () => {
    zendeskClientBase.onRequesterChange(fakerFn);
    expect(mockZendeskClient.on).toHaveBeenCalledWith(
      'ticket.requester.changed',
      expect.any(Function)
    );
  });

  it('should call onBrandChange when param is passed', () => {
    zendeskClientBase.onBrandChange(fakerFn);
    expect(mockZendeskClient.on).toHaveBeenCalledWith(
      'ticket.brand.changed',
      expect.any(Function)
    );
  });

  it('should call onTicketSave when param is passed', () => {
    zendeskClientBase.onTicketSave(fakerFn);
    expect(mockZendeskClient.on).toHaveBeenCalledWith(
      'ticket.save',
      expect.any(Function)
    );
  });

  it('should call onStatusChange when param is passed', () => {
    zendeskClientBase.onStatusChange(fakerFn);
    expect(mockZendeskClient.on).toHaveBeenCalledWith(
      'ticket.status.changed',
      expect.any(Function)
    );
  });

  it.each([
    ['error', 1000],
    ['success', 2000]
  ])(
    'should call notifyUser type %s with the correct params',
    (type, durationInMs) => {
      const message = 'message';
      zendeskClientBase.notifyUser(message, type, durationInMs);
      expect(mockZendeskClient.invoke).toHaveBeenCalledWith(
        'notify',
        message,
        type,
        durationInMs
      );
    }
  );

  it('should call notifyUser with default params', () => {
    const message = 'message';
    zendeskClientBase.notifyUser(message);
    expect(mockZendeskClient.invoke).toHaveBeenCalledWith(
      'notify',
      message,
      'error',
      5000
    );
  });

  it.each([
    [0, 120],
    [1, 121]
  ])(
    'should call reziseFrame size %i with the correct params',
    (value, expected) => {
      zendeskClientBase.resizeFrame(value);
      expect(mockZendeskClient.invoke).toHaveBeenCalledWith('resize', {
        width: '100%',
        height: `${expected}px`
      });
    }
  );

  it('should call reziseFrame with default params', () => {
    zendeskClientBase.resizeFrame();
    expect(mockZendeskClient.invoke).toHaveBeenCalledWith('resize', {
      width: '100%',
      height: `200px`
    });
  });

  it('should call makeRequest with the correct', async () => {
    const payload: PayloadRequest = {
      url: 'url',
      method: 'method'
    };
    await zendeskClientBase.makeRequest(payload);
    expect(mockZendeskClient.request).toHaveBeenCalledWith({
      ...payload,
      secure: false,
      contentType: 'application/x-www-form-urlencoded'
    });
  });

  it('should call get with the correct params', async () => {
    const getter = 'getter';
    mockZendeskClient.get.mockResolvedValue({ getter });
    await zendeskClientBase.get(getter);
    expect(mockZendeskClient.get).toHaveBeenCalledWith(getter);
  });

  it('should call set with the correct params', async () => {
    await zendeskClientBase.set('setter', 'value');
    expect(mockZendeskClient.set).toHaveBeenCalledWith('setter', 'value');
  });

  it('should call trigger with the correct params', async () => {
    await zendeskClientBase.trigger('trigger', 'data');
    expect(mockZendeskClient.trigger).toHaveBeenCalledWith('trigger', 'data');
  });

  it('should call on with the correct params', async () => {
    await zendeskClientBase.on('event', fakerFn);
    expect(mockZendeskClient.on).toHaveBeenCalledWith('event', fakerFn);
  });

  it('should call setTicketField with the correct params', async () => {
    const ticketFieldId = 'ticketFieldId';
    const value = 'value';
    await zendeskClientBase.setTicketField(ticketFieldId, value);
    expect(mockZendeskClient.set).toHaveBeenCalledWith(
      `ticket.customField:custom_field_${ticketFieldId}`,
      value
    );
  });

  it.each(['hide', 'show', 'enable', 'disable'])(
    'should call ticketFieldOption %s with the correct params',
    async (value) => {
      const ticketFieldId = '123';

      await zendeskClientBase.ticketFieldOption(ticketFieldId, value);
      expect(mockZendeskClient.invoke).toHaveBeenCalledWith(
        `ticket.customField:custom_field_${ticketFieldId}.${value}`,
        undefined,
        undefined
      );
    }
  );

  it('should call createModal with the correct params', async () => {
    const modal = {
      modalName: 'modalName',
      modalUrl: 'modalUrl',
      size: {
        width: 'width',
        height: 'height'
      }
    };
    await zendeskClientBase.createModal(modal);
    expect(mockZendeskClient.invoke).toHaveBeenCalledWith(
      'instances.create',
      {
        location: 'modal',
        url: `${modal.modalUrl}?modal=${modal.modalName}`,
        size: {
          width: modal.size.width,
          height: modal.size.height
        }
      },
      undefined
    );
  });
});
