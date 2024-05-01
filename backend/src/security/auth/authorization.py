class Authorization:
    @classmethod
    def is_administrator(cls, user) -> bool:
        return user.administraor
        

    @classmethod
    def is_enable_user(cls, user) -> bool:
        return user.enable
        